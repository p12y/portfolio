const generateImages = appName => {
  const images = [];
  for (let i = 1; i <= numImages[appName]; i += 1) {
    images.push({
      original: require(`images/screenshots/${appName}/${i}.png`),
    });
  }
  return images;
};

const numImages = {
  shrnk: 3,
  'time-planner': 5,
  'meetup-scheduler': 4,
};

/**
 * List of portfolio work items to be displayed
 */
export default [
  {
    projectTitle: 'Time Planner',
    projectInfo:
      'Time planning application built with React, Firebase and Material UI. Complete with SSO capability, the app allows employees to create time plans and share them with other members of the team.',
    background: 'linear-gradient(to right, #6dd5ed, #2193b0)',
    images: generateImages('time-planner'),
    tags: ['React', 'Firebase', 'SSO', 'Google App Engine'],
  },
  {
    projectTitle: 'Meetup Polls',
    projectInfo:
      'Polling application built with React and Firebase with realtime functionality. Designed to help friends & family pick a day to meet up that works for everyone.',
    background: 'linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)',
    url: 'https://meetup-scheduler-development.firebaseapp.com/',
    images: generateImages('meetup-scheduler'),
    tags: ['React', 'Firebase', 'Cloud Functions'],
  },
  {
    projectTitle: 'Shrnk',
    projectInfo:
      'A URL shortening application and API that takes a long URL and returns an encoded URL, which will redirect back to the original. Built with Vue, Express and MongoDB.',
    url: 'https://shrnk-url.appspot.com/',
    background: 'linear-gradient(to right, #0083B0, #00B4DB)',
    images: generateImages('shrnk'),

    tags: ['NodeJS', 'Express', 'Vue', 'MongoDB', 'Google App Engine'],
  },
];
