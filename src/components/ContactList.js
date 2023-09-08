function ContactList({ selectContact, contacts, onSelect }) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button onClick={() => onSelect}>{contacts.name}</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
