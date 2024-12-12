import { Fragment } from "react/jsx-runtime"

export interface TechListProps {
    content: { title: string, tech: string}[]
}

export const TechList: React.FC<TechListProps> = ({
    content,
}) => {
    return (
        <span className="mx-auto grid grid-cols-2 gap-x-4">
            {content?.map(({ title, tech }) => (
                <Fragment key={title}>
                    <span>{title}</span>
                    <span className="text-left">{tech}</span>
                </Fragment>
            ))}
        </span>
    )
}