namespace DAL.Entities
{
    public class Message
    {
        public int MessageId { get; set; }
        public string Namesurname { get; set; } = string.Empty;
        public string Subject { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string MessageDetail { get; set; } = string.Empty;
        public DateTime SendDate { get; set; }
        public bool IsRead { get; set; }


    }
}