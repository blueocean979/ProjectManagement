interface column {
    id: string;
    name: string;
}
export default function Columns(col: column) {
    return (
        <div
            key={col.id}
            className="w-48 text-white border border-sky-500"
        >
            {col.name}
        </div>
    )
}