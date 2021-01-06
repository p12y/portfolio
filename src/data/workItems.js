const generateImages = (appName, format = 'png') => {
  const images = [];
  for (let i = 1; i <= numImages[appName]; i += 1) {
    images.push({
      original: require(`images/screenshots/${appName}/${i}.${format}`),
    });
  }
  return images;
};

const numImages = {
  shrnk: 3,
  'time-planner': 5,
  'meetup-scheduler': 4,
  'notes-pwa': 2
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
    projectTitle: 'Notes PWA',
    projectInfo:
      'An offline capable PWA note app, built with Svelte and PouchDB.',
    appUrl: 'https://svelte-notes-pwa.vercel.app',
    githubUrl: 'https://github.com/p12y/Svelte-notes-PWA',
    background: 'linear-gradient(to right, #0083B0, #00B4DB)',
    images: generateImages('notes-pwa', 'jpg'),

    tags: ['Svelte', 'PWA', 'PouchDB', 'Vercel'],
  },
  {
    projectTitle: 'Meetup Polls',
    projectInfo:
      'Polling application built with React and Firebase with realtime functionality. Designed to help friends & family pick a day to meet up that works for everyone.',
    background: 'linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)',
    appUrl: 'https://meetup-scheduler-development.firebaseapp.com/',
    githubUrl: 'https://github.com/p12y/meetup-scheduler',
    images: generateImages('meetup-scheduler'),
    tags: ['React', 'Firebase', 'Cloud Functions', 'Styled Components'],
  },
  // {
  //   projectTitle: 'Shrnk',
  //   projectInfo:
  //     'A URL shortening application and API that takes a long URL and returns an encoded URL, which will redirect back to the original. Built with Vue, Express and MongoDB.',
  //   appUrl: 'https://shrnk-url.appspot.com/',
  //   githubUrl: 'https://github.com/p12y/shrnk',
  //   background: 'linear-gradient(to right, #0083B0, #00B4DB)',
  //   images: generateImages('shrnk'),

  //   tags: ['NodeJS', 'Express', 'Vue', 'MongoDB', 'Google App Engine'],
  // },
];
