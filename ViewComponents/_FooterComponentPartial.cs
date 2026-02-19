using Microsoft.AspNetCore.Mvc;
namespace portfolyom.ViewComponents
{
    public class _FooterComponentPartial : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}