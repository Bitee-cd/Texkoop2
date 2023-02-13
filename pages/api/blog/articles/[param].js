import { API_URL } from "../../../../utils/data";

const ArticlesApi = async (req, res) => {
  let {param} = req.query  
  
  if (req.method === "GET") {
    // const body = JSON.stringify(req.body);
    try {
      const apiRes = await fetch(`${API_URL}/api/articles/?p=${param}`);
      const data = await apiRes.json();
      
      if (apiRes.status === 200) {
        return res.status(200).json({ data: data });
      } else {
        return res.status(apiRes.status).json({ error: data.error });
      }
    } catch {
      return res.status(500).json({ error: "something went wrong " });
    }
  } else {
    
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
};
export default ArticlesApi;
