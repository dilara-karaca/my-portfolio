namespace portfolyom.ViewComponents
{
    using Microsoft.AspNetCore.Mvc;

    public class _PortfolioComponentPartial : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return this.View();
        }
    }
}