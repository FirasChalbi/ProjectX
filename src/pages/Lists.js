import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import newlist from '../image/newlist.png';
import pixel from '../image/pixel.gif';

import "./lists.css";

function Lists() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listName, setListName] = useState('');
  const [lists, setLists] = useState([]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleInputChange = (e) => {
    setListName(e.target.value);
  };

  const handleCreateList = async (e) => {
    e.preventDefault();
    if (listName.trim() !== '') {
      try {
        const response = await fetch('https://barkaa-service.onrender.com/api/lists', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ name: listName }),
        });

        if (response.ok) {
          const newList = await response.json();
          setLists([...lists, newList]);
          setListName('');
          setIsModalOpen(false);
        } else {
          console.error('Error creating list:', response.statusText);
        }
      } catch (error) {
        console.error('Error creating list:', error);
      }
    }
  };

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await fetch('https://barkaa-service.onrender.com/api/lists', {
          credentials: 'include',
        });

        if (response.ok) {
          const fetchedLists = await response.json();
          setLists(fetchedLists);
        } else {
          console.error('Error fetching lists:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching lists:', error);
      }
    };

    fetchLists();
  }, []);  

  return (
    <div className="parent">
      <section id="folder_section">
        <div className="tile">
          <div className="flow-items" style={{ justifyContent: 'space-between' }}>
            <h2>Your lists</h2>
          </div>
          <div>
            <div className="folders-grid">
              {lists.map((list) => (
                <Link to={`/lists/${list._id}`} className="folder-item" key={list._id}>
                  <div className="_folder-imgs -empty-list">
                    <div className="_blank">
                      <img src={pixel} alt="New List" />
                    </div>
                  </div>
                  <div className="_name">{list.name}</div>
                  <div className="flow-items -space-between">
                    <div className="_count">No items</div>
                  </div>
                </Link>
              ))}
              <div className="folder-item _add_item" onClick={toggleModal}>
                <div className="_folder-imgs -empty-list">
                  <div className="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
                    </svg>
                  </div>
                </div>
                <div className="_name">Create New List</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div
          className="modal-parent lists-modal"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <form
            onSubmit={handleCreateList}
            style={{
              backgroundColor: 'white',
              padding: '20px',
              marginRight: '20px',
              marginLeft: '20px',
              borderRadius: '5px',
            }}
          >
            <div className="lists-modal">
              <div
                className="_title flow-items"
                style={{ justifyContent: 'space-between' }}
              >
                <div style={{ flex: 1 }}>Create list</div>
                <svg
                  clipRule="evenodd"
                  fillRule="evenodd"
                  strokeLinejoin="round"
                  strokeMiterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  onClick={toggleModal}
                  style={{ cursor: 'pointer' }}
                >
                  <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
                </svg>
              </div>
              <div className="_form">
                <img id="icon" src={newlist} alt="New List Icon" />
                <input
                  type="text"
                  id="list_name"
                  name="list_name"
                  value={listName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter list name"
                  autoComplete="off"
                />
                <div className="_cta">
                  <button
                    type="submit"
                    className="cta -bg-transparent -color-purple -save-list -create-list"
                  >
                    Create
                  </button>
                </div>
              </div>
              <div>
                <small className="-color-grey">
                  Did you know? Lists are shareable for friends and families to
                  use
                </small>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Lists;
