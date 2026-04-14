using Microsoft.AspNetCore.Mvc;

namespace portfolyom.Controllers
{
    public class LayoutController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}