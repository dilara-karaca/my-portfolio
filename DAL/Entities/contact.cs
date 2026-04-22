namespace DAL.Entities
{
    public class Contact
    {
        public int ContactId { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Email2 { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;

    }
}