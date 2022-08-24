import React from 'react';

import s from './Notification.module.css';

const Notification = ({ children }) => <p className={s.alert}>{children}</p>;

export default Notification;
