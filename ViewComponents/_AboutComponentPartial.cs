using Microsoft.AspNetCore.Mvc;
namespace portfolyom.ViewComponents
{
    public class _AboutComponentPartial : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            ViewBag.aboutTitle = "Frontend Developer";
            ViewBag.aboutSubDescription = "Teknoloji Odaklı Bilgisayar Mühendisliği Öğrencisi";
            ViewBag.aboutDetail = "I build portfolio and web app interfaces with a focus on speed, clarity, and maintainability.";

            return View();
        }
    }
}