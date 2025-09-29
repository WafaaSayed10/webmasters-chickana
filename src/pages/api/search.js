import { useMenu } from "@/hooks/useMenu";

export default function handler(req, res) {
    const {data}=useMenu()
    console.log(data);
    
    const { q } = req.query;
    const query = q?.toLowerCase() || '';

    const results = data.flatMap(category =>
        category.items.filter(item =>
        item.name.toLowerCase().includes(query)
        )
    );

    res.status(200).json(results);
}