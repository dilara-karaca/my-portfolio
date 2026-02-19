using Microsoft.AspNetCore.Mvc;

namespace portfolyom.Controllers
{
    public class DefaultController : Controller
    {
        // GET: /Default/
        public IActionResult Index()
        {
            return View();
        }
    }
}