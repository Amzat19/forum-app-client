import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faHeart, faReplyAll } from "@fortawesome/free-solid-svg-icons";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import useUpdateThreadPoint from "../../hooks/useUpdateThreadPoint";

export class ThreadPointsBarProps {
    points: number = 0;
    responseCount?: number;
    threadId?: string;
    allowUpdatePoints?: boolean = false;
    refreshThread?: () => void;
}

const ThreadPointsBar: FC<ThreadPointsBarProps> = ({
    points,
    responseCount,
    threadId,
    allowUpdatePoints,
    refreshThread,
}) => {
    const { width } = useWindowDimensions();
    const { onClickIncThreadPoint, onClickDecThreadPoint } = useUpdateThreadPoint(refreshThread, threadId)

    if (width > 768) {
        return (
            <div className="threadcard-points">
                <div className="threadcard-points-item">
                    <div
                        className="threadcard-points-item-btn"
                        style={{ display: `${allowUpdatePoints ? "block" : "none"}` }}
                    >
                        <FontAwesomeIcon icon={faChevronUp} className="points-icon" onClick={onClickIncThreadPoint} />
                    </div>
                    {points}
                    <div
                        className="threadcard-points-item-btn"
                        style={{ display: `${allowUpdatePoints ? "block" : "none"}` }}
                    >
                        <FontAwesomeIcon icon={faChevronDown} className="points-icon" onClick={onClickDecThreadPoint} />
                    </div>
                    <FontAwesomeIcon icon={faHeart} className="points-icon" />
                </div>
                <div className="threadcard-points-item">
                    {responseCount}
                    <br />
                    <FontAwesomeIcon icon={faReplyAll} className="pints-icon" />
                </div>
            </div>
        );
    }
    return null;
};

export default ThreadPointsBar;
