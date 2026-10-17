using Microsoft.AspNetCore.Mvc;

namespace portfolyom.ViewComponents
{
    public class _FeatureComponentPartial : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
