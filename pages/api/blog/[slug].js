import { API_URL } from "../../../utils/data";

const ArticleApi = async (req, res) => {
    
  if (req.method === "GET") {
    let {slug} = req.query
    
    try {
      const apiRes = await fetch(`${API_URL}/api/article/${slug}`);
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
export default ArticleApi;
