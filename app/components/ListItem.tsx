import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"

type Props = {
    post: Meta
}

export default function ListItem({ post }: Props) {
    const { id, title, date } = post
    const formattedDate = getFormattedDate(date)

    return (
        <li className="mt-4 text-base text-gray-700 dark:text-gray-300">
            <Link className="underline hover:text-gray-900 dark:hover:text-gray-100" href={`/posts/${id}`}>{title}</Link>
            <br />
            <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">{formattedDate}</p>
        </li>
    )
}