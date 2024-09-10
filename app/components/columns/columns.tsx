interface props {
    col: column;
    key: string
}
interface column {
    id: string;
    name: string;
}
export default function Columns({col, key}: props) {
    return (
        <div
            className="flex-shrink-0 w-64 border p-4 border-box h-full" 
        >
            {col.name}
        </div>
    )
}