using Microsoft.AspNetCore.Mvc;
namespace portfolyom.ViewComponents
{
    public class _StatisticComponentPartial : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}