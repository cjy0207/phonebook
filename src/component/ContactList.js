import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  const searchKeyword = useSelector((state) => state.searchKeyword);
  const [filteredList, setFilteredList] = useState(contactList);

  useEffect(() => {
    if (searchKeyword) {
      const list = contactList.filter((item) =>
        item.name.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [searchKeyword, contactList]);

  return (
    <div className="contact-list-container">
      <SearchBox />
      <div className="contact-list">
        <div className="contact-count">num : {filteredList.length}</div>
        {filteredList.map((item, index) => (
          <ContactItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
