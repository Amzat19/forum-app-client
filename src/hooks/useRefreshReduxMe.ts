import { gql, QueryLazyOptions, useLazyQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import { setUserProfile } from "../store/user/Reducer";

export const Me = gql`
  query me {
    me {
      ... on EntityResult {
        messages
      }
      ... on User {
        id
        userName
        threads {
          id
          title
        }
        threadItems {
          id
          thread {
            id
          }
          body
        }
      }
    }
  }
`;

interface UseRefreshReduxMeResult {
    execMe: (options?: QueryLazyOptions<Record<string, any>> | undefined) => void;
    deleteMe: () => void;
    updateMe: () => void;
}

const useRefreshReduxMe = (): UseRefreshReduxMeResult => {
    const [execMe, { data }] = useLazyQuery(Me);
    const reduxDispatcher = useDispatch();

    const deleteMe = () => {
        reduxDispatcher({
            type: setUserProfile,
            payload: null,
        });
    };

    const updateMe = () => {
        if (data && data.me && data.me.userName) {
            reduxDispatcher({
                type: setUserProfile,
                payload: data.me,
            });
        }
    };

    return { execMe, deleteMe, updateMe };
};

export default useRefreshReduxMe;