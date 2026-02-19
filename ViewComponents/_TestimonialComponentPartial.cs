namespace portfolyom.ViewComponents
{
    using Microsoft.AspNetCore.Mvc;

    public class _TestimonialComponentPartial : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return this.View();
        }
    }
}