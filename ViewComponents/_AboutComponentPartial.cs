using Microsoft.AspNetCore.Mvc;

namespace portfolyom.ViewComponents
{
    public class _AboutComponentPartial : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
