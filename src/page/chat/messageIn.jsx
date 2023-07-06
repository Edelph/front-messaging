import React from "react";

const MessageIn = ({ message }) => {
  return (
    <li className="chat-list left">
      <div className="conversation-list">
        <div className="chat-avatar">
          <img src="assets/images/users/avatar-2.jpg" alt="" />
        </div>
        <div className="user-chat-content">
          <div className="ctext-wrap">
            <div className="ctext-wrap-content">
              <p className="mb-0 ctext-content">{message.message}</p>
            </div>
            <div className="dropdown align-self-start message-box-drop">
              <a
                className="dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="ri-more-2-fill"></i>
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item reply-message" href="#">
                  <i className="ri-reply-line me-2 text-muted align-bottom"></i>
                  Reply
                </a>
                <a className="dropdown-item" href="#">
                  <i className="ri-share-line me-2 text-muted align-bottom"></i>
                  Forward
                </a>
                <a className="dropdown-item copy-message" href="#">
                  <i className="ri-file-copy-line me-2 text-muted align-bottom"></i>
                  Copy
                </a>
                <a className="dropdown-item" href="#">
                  <i className="ri-bookmark-line me-2 text-muted align-bottom"></i>
                  Bookmark
                </a>
                <a className="dropdown-item delete-item" href="#">
                  <i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>
                  Delete
                </a>
              </div>
            </div>
          </div>
          <div className="conversation-name">
            <small className="text-muted time">09:07 am</small>
            <span className="text-success check-message-icon">
              <i className="ri-check-double-line align-bottom"></i>
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MessageIn;
