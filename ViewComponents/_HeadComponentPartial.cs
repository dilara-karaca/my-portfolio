namespace portfolyom.ViewComponents
{
    using Microsoft.AspNetCore.Mvc;

    public class _HeadComponentPartial : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return this.View();
        }
    }
}