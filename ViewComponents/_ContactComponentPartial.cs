using Microsoft.AspNetCore.Mvc;
namespace portfolyom.ViewComponents
{
    public class _ContactComponentPartial : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}