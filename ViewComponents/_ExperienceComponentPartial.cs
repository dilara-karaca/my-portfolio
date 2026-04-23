using Microsoft.AspNetCore.Mvc;
namespace portfolyom.ViewComponents
{
    public class _ExperienceComponentPartial : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            var values = new List<DAL.Entities.Experience>
            {
                new DAL.Entities.Experience
                {
                    Head = "2024 - Present",
                    Title = "Freelance / Personal Projects",
                    Date = "Web",
                    Description = "Building portfolio sites and small business web experiences."
                },
                new DAL.Entities.Experience
                {
                    Head = "2023 - 2024",
                    Title = "Frontend Practice",
                    Date = "UI / UX",
                    Description = "Focused on responsive layouts, component structure, and clean visual systems."
                }
            };

            return View(values);
        }
    }
}