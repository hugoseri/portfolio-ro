import { MoveRight } from "lucide-react";
import './FromTo.css';
import { Fragment } from "react/jsx-runtime";

export interface FromToProps {
    content: { description: string, from: string, to?: string}[]
}

export const FromTo: React.FC<FromToProps> = ({
    content,
}) => {
    return (
        <span className="fromto">
            {content?.map(({ description, from, to }) => (
                <Fragment key={description}>
                    <span>{description}</span>
                    <span className="text-right">{from}</span>
                    {
                        to &&
                        <>
                            <MoveRight className="mx-auto" strokeWidth={1} />
                            <span>{to ?? ''}</span>
                        </> 
                    }
                </Fragment>
            ))}
        </span>
    )
}