import { Link } from "react-router";
import ScoreCircle from "~/components/ScoreCircle";

const ResumeCard = ({
                        resume: { id, companyName, jobTitle, feedback, imagePath },
                    }: {
    resume: Resume;
}) => {
    return (
        <Link
            to={`/resume/${id}`}
            className="resume-card animate-in fade-in duration-1000"
        >
            {/*  TOP: Heading + Score */}
            <div className="resume-card-header">
                <div className="flex flex-col gap-2">
                    <h2 className="!text-black font-bold break-words">
                        {companyName}
                    </h2>
                    <h3 className="!text-lg break-words text-gray-500">
                        {jobTitle}
                    </h3>
                </div>

                <div className="flex-shrink-0">
                    <ScoreCircle score={feedback.overallScore} />
                </div>
            </div>

            {/*  BOTTOM: Resume Image */}
            <div className="gradient-border animate-in fade-in duration-1000">
                <img
                    src={imagePath}
                    alt="resume"
                    className="w-full h-[260px] max-sm:h-[180px] object-cover object-top rounded-xl"
                />
            </div>
        </Link>
    );
};

export default ResumeCard;
