import React from "react";
import "./Chat.css";

const Chat = () => {
  return (
    <div class="content d-lg-flex gap-1 p-1">
      {/* modal */}

      <div
        class="modal fade"
        id="exampleModalgrid"
        tabindex="-1"
        aria-labelledby="exampleModalgridLabel"
        aria-modal="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalgridLabel">
                Grid Modals
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form action="javascript:void(0);">
                <div class="row g-3">
                  <div class="col-xxl-6">
                    <div>
                      <label for="firstName" class="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="firstName"
                        placeholder="Enter firstname"
                      />
                    </div>
                  </div>
                  <div class="col-xxl-6">
                    <div>
                      <label for="lastName" class="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="lastName"
                        placeholder="Enter lastname"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <label for="genderInput" class="form-label">
                      Gender
                    </label>
                    <div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                        />
                        <label class="form-check-label" for="inlineRadio1">
                          Male
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />
                        <label class="form-check-label" for="inlineRadio2">
                          Female
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio3"
                          value="option3"
                        />
                        <label class="form-check-label" for="inlineRadio3">
                          Others
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-6">
                    <div>
                      <label for="emailInput" class="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="emailInput"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div class="col-xxl-6">
                    <div>
                      <label for="passwordInput" class="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="passwordInput"
                        value="451326546"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="hstack gap-2 justify-content-end">
                      <button
                        type="button"
                        class="btn btn-light"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* fin modal */}
      <div class="chat-leftsidebar">
        <div class="px-4 pt-4 mb-4">
          <div class="d-flex align-items-start user">
            <div class="flex-grow-1">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                  <img
                    src="assets/images/users/avatar-2.jpg"
                    class="rounded-circle avatar-xs"
                    alt=""
                  />
                  <span class="user-status"></span>
                </div>
                <div class="flex-grow-1 overflow-hidden">
                  <h5 class="text-truncate mb-0 fs-16">
                    <a
                      class="text-reset username"
                      data-bs-toggle="offcanvas"
                      href="#userProfileCanvasExample"
                      aria-controls="userProfileCanvasExample"
                    >
                      Lisa Parker
                    </a>
                  </h5>
                  <p class="text-truncate text-muted mb-0 userStatus">
                    <small class="fs-13">Online</small>
                  </p>
                </div>
              </div>
            </div>
            <div class="flex-shrink-0">
              <div
                data-bs-toggle="tooltip"
                data-bs-trigger="hover"
                data-bs-placement="bottom"
                title=""
                data-bs-original-title="Add Contact"
              >
                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalgrid" class="btn btn-soft-success btn-sm">
                  <i class="ri-add-line align-bottom"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="search-box">
            <input
              type="text"
              class="form-control bg-light border-light"
              placeholder="Search here..."
            />
            <i class="ri-search-2-line search-icon"></i>
          </div>
        </div>

        <div class="chat-room-list ">
          <div class="simplebar-wrapper chat2">
            <div class="simplebar-height-auto-observer-wrapper">
              <div class="simplebar-height-auto-observer"></div>
            </div>
            <div class="simplebar-mask persone">
              <div class="simplebar-offset chat3">
                <div
                  class="simplebar-content-wrapper chat5"
                  tabindex="0"
                  role="region"
                  aria-label="scrollable content"
                >
                  <div class="simplebar-content chat6">
                    <div class="d-flex align-items-center px-4 mb-2">
                      <div class="flex-grow-1">
                        <h4 class="mb-0 fs-12 text-muted text-uppercase">
                          Direct Messages
                        </h4>
                      </div>
                    </div>

                    <div class="chat-message-list">
                      <ul
                        class="list-unstyled chat-list chat-user-list"
                        id="userList"
                      >
                        <li>
                          <a href="javascript: void(0);">
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                                <div class="avatar-xxs">
                                  <img
                                    src="assets/images/users/avatar-2.jpg"
                                    class="rounded-circle img-fluid userprofile"
                                    alt=""
                                  />
                                </div>
                                <span class="user-status"></span>
                              </div>
                              <div class="flex-grow-1 overflow-hidden">
                                <p class="text-truncate mb-0">Lisa Parker</p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li class="active">
                          <a
                            href="javascript: void(0);"
                            class="unread-msg-user"
                          >
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                                <div class="avatar-xxs">
                                  <img
                                    src="assets/images/users/avatar-3.jpg"
                                    class="rounded-circle img-fluid userprofile"
                                    alt=""
                                  />
                                </div>
                                <span class="user-status"></span>
                              </div>
                              <div class="flex-grow-1 overflow-hidden">
                                <p class="text-truncate mb-0">Frank Thomas</p>
                              </div>
                              <div class="flex-shrink-0">
                                <span class="badge badge-soft-dark rounded p-1">
                                  8
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript: void(0);">
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 chat-user-img away align-self-center me-2 ms-0">
                                <div class="avatar-xxs">
                                  <div class="avatar-title rounded-circle bg-danger userprofile">
                                    C
                                  </div>
                                </div>
                                <span class="user-status"></span>
                              </div>
                              <div class="flex-grow-1 overflow-hidden">
                                <p class="text-truncate mb-0">
                                  Clifford Taylor
                                </p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript: void(0);">
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                                <div class="avatar-xxs">
                                  <img
                                    src="assets/images/users/avatar-4.jpg"
                                    class="rounded-circle img-fluid userprofile"
                                    alt=""
                                  />
                                </div>
                                <span class="user-status"></span>
                              </div>
                              <div class="flex-grow-1 overflow-hidden">
                                <p class="text-truncate mb-0">Janette Caster</p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript: void(0);"
                            class="unread-msg-user"
                          >
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                                <div class="avatar-xxs">
                                  <img
                                    src="assets/images/users/avatar-5.jpg"
                                    class="rounded-circle img-fluid userprofile"
                                    alt=""
                                  />
                                </div>
                                <span class="user-status"></span>
                              </div>
                              <div class="flex-grow-1 overflow-hidden">
                                <p class="text-truncate mb-0">Sarah Beattie</p>
                              </div>
                              <div class="flex-shrink-0">
                                <span class="badge badge-soft-dark rounded p-1">
                                  5
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript: void(0);"
                            class="unread-msg-user"
                          >
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 chat-user-img away align-self-center me-2 ms-0">
                                <div class="avatar-xxs">
                                  <img
                                    src="assets/images/users/avatar-6.jpg"
                                    class="rounded-circle img-fluid userprofile"
                                    alt=""
                                  />
                                </div>
                                <span class="user-status"></span>
                              </div>
                              <div class="flex-grow-1 overflow-hidden">
                                <p class="text-truncate mb-0">Nellie Cornett</p>
                              </div>
                              <div class="flex-shrink-0">
                                <span class="badge badge-soft-dark rounded p-1">
                                  2
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="javascript: void(0);">
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                                <div class="avatar-xxs">
                                  <div class="avatar-title rounded-circle bg-warning userprofile">
                                    C
                                  </div>
                                </div>
                                <span class="user-status"></span>
                              </div>
                              <div class="flex-grow-1 overflow-hidden">
                                <p class="text-truncate mb-0">Chris Kiernan</p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript: void(0);">
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 chat-user-img away align-self-center me-2 ms-0">
                                <div class="avatar-xxs">
                                  <div class="avatar-title rounded-circle bg-info userprofile">
                                    E
                                  </div>
                                </div>
                                <span class="user-status"></span>
                              </div>
                              <div class="flex-grow-1 overflow-hidden">
                                <p class="text-truncate mb-0">Edith Evans</p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript: void(0);">
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 chat-user-img away align-self-center me-2 ms-0">
                                <div class="avatar-xxs">
                                  <img
                                    src="assets/images/users/avatar-7.jpg"
                                    class="rounded-circle img-fluid userprofile"
                                    alt=""
                                  />
                                </div>
                                <span class="user-status"></span>
                              </div>
                              <div class="flex-grow-1 overflow-hidden">
                                <p class="text-truncate mb-0">Joseph Siegel</p>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="simplebar-placeholder chat7"></div>
          </div>
          <div class="simplebar-track simplebar-horizontal chat8">
            <div class="simplebar-scrollbar chat9"></div>
          </div>
          <div class="simplebar-track simplebar-vertical chat10">
            <div class="simplebar-scrollbar chat11"></div>
          </div>
        </div>
      </div>
      <div class="user-chat w-100 overflow-hidden">
        <div class="chat-content d-lg-flex">
          <div class="w-100 overflow-hidden position-relative">
            <div class="position-relative">
              <div class="p-3 user-chat-topbar">
                <div class="row align-items-center">
                  <div class="col-sm-4 col-8">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0 d-block d-lg-none me-3">
                        <a
                          href="javascript: void(0);"
                          class="user-chat-remove fs-18 p-1"
                        >
                          <i class="ri-arrow-left-s-line align-bottom"></i>
                        </a>
                      </div>
                      <div class="flex-grow-1 overflow-hidden">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                            <img
                              src="assets/images/users/avatar-2.jpg"
                              class="rounded-circle avatar-xs"
                              alt=""
                            />
                            <span class="user-status"></span>
                          </div>
                          <div class="flex-grow-1 overflow-hidden">
                            <h5 class="text-truncate mb-0 fs-16">
                              <a
                                class="text-reset username"
                                data-bs-toggle="offcanvas"
                                href="#userProfileCanvasExample"
                                aria-controls="userProfileCanvasExample"
                              >
                                Lisa Parker
                              </a>
                            </h5>
                            <p class="text-truncate text-muted mb-0 userStatus">
                              <small class="fs-13">Online</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-8 col-4">
                    <ul class="list-inline user-chat-nav text-end mb-0">
                      <li class="list-inline-item m-0">
                        <div class="dropdown">
                          <button
                            class="btn btn-ghost-secondary btn-icon"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-search icon-sm"
                            >
                              <circle cx="11" cy="11" r="8"></circle>
                              <line
                                x1="21"
                                y1="21"
                                x2="16.65"
                                y2="16.65"
                              ></line>
                            </svg>
                          </button>
                          <div class="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg">
                            <div class="p-2">
                              <div class="search-box">
                                <input
                                  type="text"
                                  class="form-control bg-light border-light"
                                  placeholder="Search here..."
                                  onkeyup="searchMessages()"
                                  id="searchMessage"
                                />
                                <i class="ri-search-2-line search-icon"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li class="list-inline-item d-none d-lg-inline-block m-0">
                        <button
                          type="button"
                          class="btn btn-ghost-secondary btn-icon"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#userProfileCanvasExample"
                          aria-controls="userProfileCanvasExample"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-info icon-sm"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="16" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                          </svg>
                        </button>
                      </li>

                      <li class="list-inline-item m-0">
                        <div class="dropdown">
                          <button
                            class="btn btn-ghost-secondary btn-icon"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-more-vertical icon-sm"
                            >
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="12" cy="5" r="1"></circle>
                              <circle cx="12" cy="19" r="1"></circle>
                            </svg>
                          </button>
                          <div class="dropdown-menu dropdown-menu-end">
                            <a
                              class="dropdown-item d-block d-lg-none user-profile-show"
                              href="#"
                            >
                              <i class="ri-user-2-fill align-bottom text-muted me-2"></i>
                              View Profile
                            </a>
                            <a class="dropdown-item" href="#">
                              <i class="ri-inbox-archive-line align-bottom text-muted me-2"></i>
                              Archive
                            </a>
                            <a class="dropdown-item" href="#">
                              <i class="ri-mic-off-line align-bottom text-muted me-2"></i>
                              Muted
                            </a>
                            <a class="dropdown-item" href="#">
                              <i class="ri-delete-bin-5-line align-bottom text-muted me-2"></i>
                              Delete
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="position-relative" id="users-chat">
                <div
                  class="chat-conversation p-3 p-lg-4"
                  id="chat-conversation"
                >
                  <div class="simplebar-wrapper chat12">
                    <div class="simplebar-height-auto-observer-wrapper">
                      <div class="simplebar-height-auto-observer"></div>
                    </div>
                    <div class="simplebar-mask">
                      <div class="simplebar-offset chat13">
                        <div
                          class="simplebar-content-wrapper chat16"
                          tabindex="0"
                          role="region"
                          aria-label="scrollable content"
                        >
                          <div class="simplebar-content chat15">
                            <ul
                              class="list-unstyled chat-conversation-list"
                              id="users-conversation"
                            >
                              <li class="chat-list left">
                                <div class="conversation-list">
                                  <div class="chat-avatar">
                                    <img
                                      src="assets/images/users/avatar-2.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div class="user-chat-content">
                                    <div class="ctext-wrap">
                                      <div class="ctext-wrap-content">
                                        <p class="mb-0 ctext-content">
                                          Good morning 😊
                                        </p>
                                      </div>
                                      <div class="dropdown align-self-start message-box-drop">
                                        <a
                                          class="dropdown-toggle"
                                          href="#"
                                          role="button"
                                          data-bs-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                        >
                                          <i class="ri-more-2-fill"></i>
                                        </a>
                                        <div class="dropdown-menu">
                                          <a
                                            class="dropdown-item reply-message"
                                            href="#"
                                          >
                                            <i class="ri-reply-line me-2 text-muted align-bottom"></i>
                                            Reply
                                          </a>
                                          <a class="dropdown-item" href="#">
                                            <i class="ri-share-line me-2 text-muted align-bottom"></i>
                                            Forward
                                          </a>
                                          <a
                                            class="dropdown-item copy-message"
                                            href="#"
                                          >
                                            <i class="ri-file-copy-line me-2 text-muted align-bottom"></i>
                                            Copy
                                          </a>
                                          <a class="dropdown-item" href="#">
                                            <i class="ri-bookmark-line me-2 text-muted align-bottom"></i>
                                            Bookmark
                                          </a>
                                          <a
                                            class="dropdown-item delete-item"
                                            href="#"
                                          >
                                            <i class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>
                                            Delete
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="conversation-name">
                                      <small class="text-muted time">
                                        09:07 am
                                      </small>
                                      <span class="text-success check-message-icon">
                                        <i class="ri-check-double-line align-bottom"></i>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li class="chat-list right">
                                <div class="conversation-list">
                                  <div class="user-chat-content">
                                    <div class="ctext-wrap">
                                      <div class="ctext-wrap-content">
                                        <p class="mb-0 ctext-content">
                                          Good morning, How are you? What about
                                          our next meeting?
                                        </p>
                                      </div>
                                      <div class="dropdown align-self-start message-box-drop">
                                        <a
                                          class="dropdown-toggle"
                                          href="#"
                                          role="button"
                                          data-bs-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                        >
                                          <i class="ri-more-2-fill"></i>
                                        </a>
                                        <div class="dropdown-menu">
                                          <a
                                            class="dropdown-item reply-message"
                                            href="#"
                                          >
                                            <i class="ri-reply-line me-2 text-muted align-bottom"></i>
                                            Reply
                                          </a>
                                          <a class="dropdown-item" href="#">
                                            <i class="ri-share-line me-2 text-muted align-bottom"></i>
                                            Forward
                                          </a>
                                          <a
                                            class="dropdown-item copy-message"
                                            href="#"
                                          >
                                            <i class="ri-file-copy-line me-2 text-muted align-bottom"></i>
                                            Copy
                                          </a>
                                          <a class="dropdown-item" href="#">
                                            <i class="ri-bookmark-line me-2 text-muted align-bottom"></i>
                                            Bookmark
                                          </a>
                                          <a
                                            class="dropdown-item delete-item"
                                            href="#"
                                          >
                                            <i class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>
                                            Delete
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="conversation-name">
                                      <small class="text-muted time">
                                        09:08 am
                                      </small>
                                      <span class="text-success check-message-icon">
                                        <i class="ri-check-double-line align-bottom"></i>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li class="chat-list left">
                                <div class="conversation-list">
                                  <div class="chat-avatar">
                                    <img
                                      src="assets/images/users/avatar-2.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div class="user-chat-content">
                                    <div class="ctext-wrap">
                                      <div class="ctext-wrap-content">
                                        <p class="mb-0 ctext-content">
                                          Yeah everything is fine. Our next
                                          meeting tomorrow at 10.00 AM
                                        </p>
                                      </div>
                                      <div class="dropdown align-self-start message-box-drop">
                                        <a
                                          class="dropdown-toggle"
                                          href="#"
                                          role="button"
                                          data-bs-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                        >
                                          <i class="ri-more-2-fill"></i>
                                        </a>
                                        <div class="dropdown-menu">
                                          <a
                                            class="dropdown-item reply-message"
                                            href="#"
                                          >
                                            <i class="ri-reply-line me-2 text-muted align-bottom"></i>
                                            Reply
                                          </a>
                                          <a class="dropdown-item" href="#">
                                            <i class="ri-share-line me-2 text-muted align-bottom"></i>
                                            Forward
                                          </a>
                                          <a
                                            class="dropdown-item copy-message"
                                            href="#"
                                          >
                                            <i class="ri-file-copy-line me-2 text-muted align-bottom"></i>
                                            Copy
                                          </a>
                                          <a class="dropdown-item" href="#">
                                            <i class="ri-bookmark-line me-2 text-muted align-bottom"></i>
                                            Bookmark
                                          </a>
                                          <a
                                            class="dropdown-item delete-item"
                                            href="#"
                                          >
                                            <i class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>
                                            Delete
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="ctext-wrap">
                                      <div class="ctext-wrap-content">
                                        <p class="mb-0 ctext-content">
                                          Hey, I'm going to meet a friend of
                                          mine at the department store. I have
                                          to buy some presents for my parents
                                          🎁.
                                        </p>
                                      </div>
                                      <div class="dropdown align-self-start message-box-drop">
                                        <a
                                          class="dropdown-toggle"
                                          href="#"
                                          role="button"
                                          data-bs-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                        >
                                          <i class="ri-more-2-fill"></i>
                                        </a>
                                        <div class="dropdown-menu">
                                          <a
                                            class="dropdown-item reply-message"
                                            href="#"
                                          >
                                            <i class="ri-reply-line me-2 text-muted align-bottom"></i>
                                            Reply
                                          </a>
                                          <a class="dropdown-item" href="#">
                                            <i class="ri-share-line me-2 text-muted align-bottom"></i>
                                            Forward
                                          </a>
                                          <a
                                            class="dropdown-item copy-message"
                                            href="#"
                                          >
                                            <i class="ri-file-copy-line me-2 text-muted align-bottom"></i>
                                            Copy
                                          </a>
                                          <a class="dropdown-item" href="#">
                                            <i class="ri-bookmark-line me-2 text-muted align-bottom"></i>
                                            Bookmark
                                          </a>
                                          <a
                                            class="dropdown-item delete-item"
                                            href="#"
                                          >
                                            <i class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>
                                            Delete
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="conversation-name">
                                      <small class="text-muted time">
                                        09:10 am
                                      </small>
                                      <span class="text-success check-message-icon">
                                        <i class="ri-check-double-line align-bottom"></i>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li class="chat-list right">
                                <div class="conversation-list">
                                  <div class="user-chat-content">
                                    <div class="ctext-wrap">
                                      <div class="ctext-wrap-content">
                                        <p class="mb-0 ctext-content">
                                          Wow that's great
                                        </p>
                                      </div>
                                      <div class="dropdown align-self-start message-box-drop">
                                        <a
                                          class="dropdown-toggle"
                                          href="#"
                                          role="button"
                                          data-bs-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                        >
                                          <i class="ri-more-2-fill"></i>
                                        </a>
                                        <div class="dropdown-menu">
                                          <a
                                            class="dropdown-item reply-message"
                                            href="#"
                                          >
                                            <i class="ri-reply-line me-2 text-muted align-bottom"></i>
                                            Reply
                                          </a>
                                          <a class="dropdown-item" href="#">
                                            <i class="ri-share-line me-2 text-muted align-bottom"></i>
                                            Forward
                                          </a>
                                          <a
                                            class="dropdown-item copy-message"
                                            href="#"
                                          >
                                            <i class="ri-file-copy-line me-2 text-muted align-bottom"></i>
                                            Copy
                                          </a>
                                          <a class="dropdown-item" href="#">
                                            <i class="ri-bookmark-line me-2 text-muted align-bottom"></i>
                                            Bookmark
                                          </a>
                                          <a
                                            class="dropdown-item delete-item"
                                            href="#"
                                          >
                                            <i class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>
                                            Delete
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="conversation-name">
                                      <small class="text-muted time">
                                        09:12 am
                                      </small>
                                      <span class="text-success check-message-icon">
                                        <i class="ri-check-double-line align-bottom"></i>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li class="chat-list left">
                                <div class="conversation-list">
                                  <div class="chat-avatar">
                                    <img
                                      src="assets/images/users/avatar-2.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div class="user-chat-content">
                                    <div class="ctext-wrap">
                                      <div class="message-img mb-0">
                                        <div class="message-img-list">
                                          <div>
                                            <a
                                              class="popup-img d-inline-block"
                                              href="assets/images/small/img-1.jpg"
                                            >
                                              <img
                                                src="assets/images/small/img-1.jpg"
                                                alt=""
                                                class="rounded border"
                                              />
                                            </a>
                                          </div>
                                          <div class="message-img-link">
                                            <ul class="list-inline mb-0">
                                              <li class="list-inline-item dropdown">
                                                <a
                                                  class="dropdown-toggle"
                                                  href="#"
                                                  role="button"
                                                  data-bs-toggle="dropdown"
                                                  aria-haspopup="true"
                                                  aria-expanded="false"
                                                >
                                                  <i class="ri-more-fill"></i>
                                                </a>
                                                <div class="dropdown-menu">
                                                  <a
                                                    class="dropdown-item"
                                                    href="assets/images/small/img-1.jpg"
                                                    download=""
                                                  >
                                                    <i class="ri-download-2-line me-2 text-muted align-bottom"></i>
                                                    Download
                                                  </a>
                                                  <a
                                                    class="dropdown-item"
                                                    href="#"
                                                  >
                                                    <i class="ri-reply-line me-2 text-muted align-bottom"></i>
                                                    Reply
                                                  </a>
                                                  <a
                                                    class="dropdown-item"
                                                    href="#"
                                                  >
                                                    <i class="ri-share-line me-2 text-muted align-bottom"></i>
                                                    Forward
                                                  </a>
                                                  <a
                                                    class="dropdown-item"
                                                    href="#"
                                                  >
                                                    <i class="ri-bookmark-line me-2 text-muted align-bottom"></i>
                                                    Bookmark
                                                  </a>
                                                  <a
                                                    class="dropdown-item delete-image"
                                                    href="#"
                                                  >
                                                    <i class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>
                                                    Delete
                                                  </a>
                                                </div>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>

                                        <div class="message-img-list">
                                          <div>
                                            <a
                                              class="popup-img d-inline-block"
                                              href="assets/images/small/img-2.jpg"
                                            >
                                              <img
                                                src="assets/images/small/img-2.jpg"
                                                alt=""
                                                class="rounded border"
                                              />
                                            </a>
                                          </div>
                                          <div class="message-img-link">
                                            <ul class="list-inline mb-0">
                                              <li class="list-inline-item dropdown">
                                                <a
                                                  class="dropdown-toggle"
                                                  href="#"
                                                  role="button"
                                                  data-bs-toggle="dropdown"
                                                  aria-haspopup="true"
                                                  aria-expanded="false"
                                                >
                                                  <i class="ri-more-fill"></i>
                                                </a>
                                                <div class="dropdown-menu">
                                                  <a
                                                    class="dropdown-item"
                                                    href="assets/images/small/img-2.jpg"
                                                    download=""
                                                  >
                                                    <i class="ri-download-2-line me-2 text-muted align-bottom"></i>
                                                    Download
                                                  </a>
                                                  <a
                                                    class="dropdown-item"
                                                    href="#"
                                                  >
                                                    <i class="ri-reply-line me-2 text-muted align-bottom"></i>
                                                    Reply
                                                  </a>
                                                  <a
                                                    class="dropdown-item"
                                                    href="#"
                                                  >
                                                    <i class="ri-share-line me-2 text-muted align-bottom"></i>
                                                    Forward
                                                  </a>
                                                  <a
                                                    class="dropdown-item"
                                                    href="#"
                                                  >
                                                    <i class="ri-bookmark-line me-2 text-muted align-bottom"></i>
                                                    Bookmark
                                                  </a>
                                                  <a
                                                    class="dropdown-item delete-image"
                                                    href="#"
                                                  >
                                                    <i class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>
                                                    Delete
                                                  </a>
                                                </div>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="conversation-name">
                                      <small class="text-muted time">
                                        09:30 am
                                      </small>
                                      <span class="text-success check-message-icon">
                                        <i class="ri-check-double-line align-bottom"></i>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="simplebar-placeholder chat17"></div>
                  </div>
                  <div class="simplebar-track simplebar-horizontal chat18">
                    <div class="simplebar-scrollbar chat19"></div>
                  </div>
                  <div class="simplebar-track simplebar-vertical chat20">
                    <div class="simplebar-scrollbar chat21"></div>
                  </div>
                </div>
                <div
                  class="alert alert-warning alert-dismissible chat22 copyclipboard-alert px-4 fade show"
                  id="copyClipBoard"
                  role="alert"
                >
                  Message copied
                </div>
              </div>

              <div class="chat-input-section p-3 p-lg-4">
                <form id="chatinput-form" enctype="multipart/form-data">
                  <div class="row g-0 align-items-center">
                    <div class="col-auto">
                      <div class="chat-input-links me-2">
                        <div class="links-list-item">
                          <button
                            type="button"
                            class="btn btn-link text-decoration-none emoji-btn"
                            id="emoji-btn"
                          >
                            <i class="bx bx-smile align-middle"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="col">
                      <div class="chat-input-feedback">
                        Please Enter a Message
                      </div>
                      <input
                        name="message"
                        type="text"
                        class="form-control chat-input bg-light border-light"
                        id="chat-input"
                        placeholder="Type your message..."
                        autocomplete="off"
                      />
                    </div>
                    <div class="col-auto">
                      <div class="chat-input-links ms-2">
                        <div class="links-list-item">
                          <button
                            type="submit"
                            class="btn btn-success chat-send waves-effect waves-light"
                          >
                            <i class="ri-send-plane-2-fill align-bottom"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div class="replyCard">
                <div class="card mb-0">
                  <div class="card-body py-3">
                    <div class="replymessage-block mb-0 d-flex align-items-start">
                      <div class="flex-grow-1">
                        <h5 class="conversation-name"></h5>
                        <p class="mb-0"></p>
                      </div>
                      <div class="flex-shrink-0">
                        <button
                          type="button"
                          id="close_toggle"
                          class="btn btn-sm btn-link mt-n2 me-n3 fs-18"
                        >
                          <i class="bx bx-x align-middle"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
