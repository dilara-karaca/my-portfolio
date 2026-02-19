namespace portfolyom.ViewComponents
{
    using Microsoft.AspNetCore.Mvc;

    public class _NavbarComponentPartial : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return this.View();
        }
    }
}