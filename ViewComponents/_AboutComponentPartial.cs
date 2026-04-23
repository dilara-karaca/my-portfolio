using Microsoft.AspNetCore.Mvc;
namespace portfolyom.ViewComponents
{
    public class _AboutComponentPartial : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            ViewBag.aboutTitle = "Frontend Developer";
            ViewBag.aboutSubDescription = "Clean, responsive, and modern web experiences.";
            ViewBag.aboutDetail = "I build portfolio and web app interfaces with a focus on speed, clarity, and maintainability.";

            return View();
        }
    }
}