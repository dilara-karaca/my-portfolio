using Microsoft.AspNetCore.Mvc;
namespace portfolyom.ViewComponents
{
    public class _FeatureComponentPartial : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            var values = new List<DAL.Entities.Feature>
            {
                new DAL.Entities.Feature
                {
                    Title = "Fast Delivery",
                    Description = "Quick iteration with clean, maintainable code."
                },
                new DAL.Entities.Feature
                {
                    Title = "Responsive Design",
                    Description = "Layouts that work smoothly on desktop and mobile."
                },
                new DAL.Entities.Feature
                {
                    Title = "Simple Deployment",
                    Description = "No database dependency required for hosting."
                }
            };

            return View(values);
        }
    }

}
