namespace DAL.Entities
{
    public class SocialMedia
    {
        public int SocialMediaId { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Icon { get; set; } = string.Empty;
        public string Link { get; set; } = string.Empty;
    }
}