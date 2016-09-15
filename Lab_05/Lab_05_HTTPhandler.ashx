public class GenericHandler : IHttpHandler
{
	public void ProcessRequest(HttpContext context)
	{
		context.Response.ContentType = "application/json";
		string bookTitle = context.Request.QueryString["bookTitle"];
		string bookAuthor = context.Request.QueryString["bookAuthor"];
		string uri = GetGoodreadsURI(bookAuthor, bookTitle); 
		string returnData = GetGoodreadsJSONResponse();
		string responseData = GetResponseFromAPI(uri, out serverStatusCode);
		if (serverStatusCode == 200)
		{
			returnData = ConvertGoodreadsXMLtoJSON(responseData, returnData);
		}	
	}
	public bool IsReusable{
		get{
			return true;
		}
	}
	public string GetGoodreadsURI(string bookAuthor, string bookTitle){
		string myKey = "lgFwnJebEqyQUmwclY5qIw"
		string uri = "http://www.goodreads.com/book/title?format={0}&author={1}&key={2}&title={3}";
		return String.Format(uri, "xml", bookAuthor, myKey, bookTitle);
	}
	public string GetResponseFromAPI(string uri, out int serverStatus)
	{
	    string responseData = String.Empty;
	    try
	    {
	        HttpWebRequest req = (HttpWebRequest)WebRequest.Create(uri);
	        HttpWebResponse res = (HttpWebResponse)req.GetResponse();
	        serverStatus = (int)res.StatusCode;

	        using (Stream s = res.GetResponseStream())
	        {
	            using (StreamReader sr = new StreamReader(s))
	            {
	                responseData = sr.ReadToEnd();
	            }
	        }
	        return responseData;
	    }
	    catch (WebException e)
	    {
	        HttpWebResponse res = (HttpWebResponse)e.Response;
	        serverStatus = (int)res.StatusCode;
	        return responseData;
	    }
	}
	public string GetGoodreadsJSONResponse()
	{
	    string returnData;
	    using (Stream s = Assembly.GetExecutingAssembly().GetManifestResourceStream(
		"BookInformationFields.txt"))
	    {
	        using (StreamReader sr = new StreamReader(s))
	        {
	            returnData = sr.ReadToEnd();
	        }
	    }
	    return returnData;
	}
	public string ConvertGoodreadsXMLtoJSON(string responseData, string bookFieldsAsJSON)
	{
		XDocument xmlResponseData = XDocument.Parse(responseData);
		XElement goodreadsRoot = xmlResponseData.Element("GoodreadsResponse");
		XElement bookRootElement = goodreadsRoot.Element("book");
		XElement workRootElement = bookRootElement.Element("work");
		XElement titleElement = bookRootElement.Element("title");
		string bookTitleValue = titleElement.Value;
		bookFieldsAsJSON = bookFieldsAsJSON.Replace("{{!Title!}}", bookTitleValue);
		XElement authorElement = bookRootElement.Element("author");
		string bookTitleValue = titleElement.Value;
		bookFieldsAsJSON = bookFieldsAsJSON.Replace("{{!Title!}}", bookTitleValue);
	}
}