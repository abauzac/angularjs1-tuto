import angular from 'angular';

// import {hello} from './app/hello';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

// name used in root "ng-app"
export const app = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  // .component('app', hello)
  .controller('PostsController', $scope => {
    $scope.posts = [
      {
        id: 0,
        name: 'Waretel',
        content: 'Velit sint tempor incididunt duis aliqua et ipsum ex mollit nisi fugiat. Laboris adipisicing minim in voluptate consequat eiusmod sunt. Nisi nulla pariatur aliqua ut aliqua consequat in. Eiusmod esse id ex laboris consequat fugiat culpa et do ea tempor minim ex et.',
        comments: [
          {
            username: 'Bullock',
            city: 'Ruckersville',
            email: 'bullockgordon@waretel.com',
            content: 'Ex ea ea magna id voluptate adipisicing dolore esse quis sint eu. In excepteur in ex in deserunt. In aliquip adipisicing excepteur occaecat occaecat officia nisi incididunt.'
          },
          {
            username: 'Irene',
            city: 'Lemoyne',
            email: 'irenegordon@waretel.com',
            content: 'Do commodo consectetur officia amet dolor cupidatat nostrud pariatur id pariatur deserunt minim duis aliqua. Minim sint et proident in proident velit incididunt eu officia ut esse do qui excepteur. Pariatur occaecat laborum mollit in amet ullamco et est sunt minim commodo.'
          },
          {
            username: 'Nell',
            city: 'Warsaw',
            email: 'nellgordon@waretel.com',
            content: 'Ipsum ipsum fugiat tempor commodo proident nisi ad est. Labore excepteur eu excepteur veniam cillum velit duis sint velit enim sunt voluptate. Reprehenderit et labore officia deserunt anim amet dolor sint nostrud ea duis occaecat aliqua commodo.'
          },
          {
            username: 'Bertie',
            city: 'Greenbush',
            email: 'bertiegordon@waretel.com',
            content: 'In deserunt tempor dolor enim sunt mollit id commodo pariatur sint dolore. Consequat eiusmod officia excepteur do. Elit esse Lorem anim do amet nostrud officia et duis magna culpa ad.'
          }
        ]
      },
      {
        id: 1,
        name: 'Idealis',
        content: 'Ullamco anim cupidatat velit ea proident et amet pariatur ad eiusmod ea amet ea. Anim reprehenderit reprehenderit tempor proident proident enim. Exercitation cupidatat laborum consequat ipsum fugiat mollit consectetur in ad consectetur cupidatat labore ex. Esse laborum aute non consequat laboris anim aute cillum ipsum.',
        comments: [
          {
            username: 'Burris',
            city: 'Bennett',
            email: 'burrisgordon@idealis.com',
            content: 'Fugiat aliqua reprehenderit ex enim. Minim tempor aute ad ex nulla sit elit quis commodo. Cillum voluptate tempor minim tempor labore ut.'
          },
          {
            username: 'Merle',
            city: 'Bartonsville',
            email: 'merlegordon@idealis.com',
            content: 'Velit magna qui ad ut esse. Incididunt ut cupidatat ullamco fugiat pariatur tempor. Qui tempor adipisicing non est sint ad mollit anim laboris magna qui quis.'
          },
          {
            username: 'Snow',
            city: 'Trail',
            email: 'snowgordon@idealis.com',
            content: 'Et eu mollit incididunt fugiat ullamco minim ipsum ex sit excepteur nulla nulla veniam enim. Aliquip dolor nisi occaecat nisi aliqua reprehenderit voluptate. Excepteur laboris commodo non ut ad laborum fugiat eiusmod cillum minim.'
          }
        ]
      },
      {
        id: 2,
        name: 'Exospeed',
        content: 'Nisi irure laborum aliquip proident amet pariatur nulla. Commodo nisi eiusmod do enim aute reprehenderit aute ex. Adipisicing sit eu elit elit et do deserunt do. Sit fugiat mollit sit irure nisi nostrud.',
        comments: [
          {
            username: 'Dorothea',
            city: 'Roeville',
            email: 'dorotheagordon@exospeed.com',
            content: 'Pariatur pariatur quis consequat eiusmod laborum adipisicing sunt reprehenderit sunt dolor sit culpa ullamco tempor. Reprehenderit velit voluptate aliqua laboris labore adipisicing tempor est irure eiusmod. Adipisicing ea laboris aliquip anim in in.'
          },
          {
            username: 'Rogers',
            city: 'Mappsville',
            email: 'rogersgordon@exospeed.com',
            content: 'In cillum mollit enim sunt dolore occaecat officia sit. Ad eu Lorem ipsum qui fugiat. Nisi ea in ex deserunt.'
          },
          {
            username: 'Lawson',
            city: 'Downsville',
            email: 'lawsongordon@exospeed.com',
            content: 'Commodo do labore velit occaecat fugiat. Lorem magna irure eu laborum. Consequat culpa qui exercitation Lorem laborum pariatur incididunt occaecat esse dolor exercitation proident enim.'
          }
        ]
      },
      {
        id: 3,
        name: 'Isbol',
        content: 'Nulla culpa elit fugiat consequat amet occaecat ea. Fugiat et velit amet elit. Cupidatat tempor occaecat Lorem laborum consequat occaecat aliquip dolor voluptate ut et. Esse cupidatat duis do tempor commodo reprehenderit minim adipisicing aliquip.',
        comments: [
          {
            username: 'Lesley',
            city: 'Venice',
            email: 'lesleygordon@isbol.com',
            content: 'Ea reprehenderit voluptate culpa est dolore id tempor incididunt aliquip dolore irure tempor do non. Nostrud officia nostrud ut dolor laboris ut fugiat sint eu Lorem. Magna exercitation nisi irure nisi commodo commodo cillum incididunt.'
          },
          {
            username: 'Suzanne',
            city: 'Idamay',
            email: 'suzannegordon@isbol.com',
            content: 'Elit labore ex aliquip ullamco enim ullamco. Eu proident sunt esse laboris ex laborum voluptate incididunt sit. Esse esse sint esse mollit occaecat pariatur fugiat dolore.'
          },
          {
            username: 'Esperanza',
            city: 'Klondike',
            email: 'esperanzagordon@isbol.com',
            content: 'Officia labore fugiat Lorem do in culpa incididunt dolor ex et ex. Laboris nulla fugiat ut veniam esse duis elit aliquip labore duis ut magna. Labore ea sit aute fugiat cillum eu minim aute deserunt ad ex pariatur adipisicing.'
          },
          {
            username: 'Adela',
            city: 'Dunlo',
            email: 'adelagordon@isbol.com',
            content: 'Ex pariatur labore duis amet nulla. Ex Lorem proident ipsum reprehenderit est mollit dolore. Excepteur sint aliquip dolore dolore adipisicing veniam in amet voluptate ut occaecat.'
          }
        ]
      },
      {
        id: 4,
        name: 'Opticon',
        content: 'Non est quis minim pariatur laborum pariatur irure voluptate exercitation cillum aute pariatur nulla. Ullamco non in magna ea anim deserunt minim eiusmod labore pariatur enim irure. Sunt esse anim et deserunt incididunt officia et. Quis irure incididunt velit irure commodo commodo anim.',
        comments: [
          {
            username: 'Peterson',
            city: 'Freeburn',
            email: 'petersongordon@opticon.com',
            content: 'Ex exercitation occaecat et commodo nisi est do esse veniam proident est voluptate irure ullamco. Do cillum eu proident ea sint consequat officia do consequat eiusmod proident ea. Nostrud consectetur id ipsum enim veniam sint tempor ipsum.'
          },
          {
            username: 'Orr',
            city: 'Wildwood',
            email: 'orrgordon@opticon.com',
            content: 'Exercitation labore nisi nisi laboris laborum adipisicing enim fugiat ullamco. Laboris Lorem proident do ea fugiat. Fugiat in veniam quis sunt aliquip exercitation.'
          }
        ]
      },
      {
        id: 5,
        name: 'Marqet',
        content: 'Esse aliqua nostrud aliquip magna esse. Reprehenderit tempor amet labore qui ipsum commodo occaecat aliqua aute sint culpa. Et cupidatat ut reprehenderit laboris enim occaecat deserunt magna fugiat id labore officia. Dolore commodo consectetur ex pariatur do exercitation amet dolor quis non.',
        comments: [
          {
            username: 'Wolf',
            city: 'Camptown',
            email: 'wolfgordon@marqet.com',
            content: 'Id occaecat veniam ex ullamco dolore eiusmod sit aliquip esse ipsum cillum mollit. Laborum cillum tempor veniam culpa fugiat ipsum nisi veniam incididunt dolore elit aliqua officia laborum. Excepteur cupidatat ex excepteur adipisicing consectetur elit quis enim dolore nostrud non velit.'
          },
          {
            username: 'Pace',
            city: 'Caln',
            email: 'pacegordon@marqet.com',
            content: 'Esse dolor aute nulla cupidatat eu labore consectetur. Deserunt fugiat quis qui et nostrud enim Lorem pariatur enim elit reprehenderit amet ad velit. Nisi pariatur consequat ea culpa elit do ex est culpa non consectetur.'
          },
          {
            username: 'Cornelia',
            city: 'Lloyd',
            email: 'corneliagordon@marqet.com',
            content: 'Cupidatat nulla culpa commodo eiusmod nisi sint laborum irure ex voluptate ipsum do. Fugiat tempor dolore tempor cillum minim id dolor in nulla proident eu. Ex qui aliqua excepteur dolore duis Lorem velit occaecat sint fugiat ipsum.'
          },
          {
            username: 'Shelley',
            city: 'Chase',
            email: 'shelleygordon@marqet.com',
            content: 'Exercitation consequat esse Lorem pariatur nostrud mollit duis voluptate. Et nisi eu cupidatat consequat officia commodo laborum sit nisi qui proident non. Pariatur dolore consectetur amet ea adipisicing incididunt laboris laboris sit.'
          }
        ]
      },
      {
        id: 6,
        name: 'Decratex',
        content: 'Ullamco cillum consectetur non incididunt amet. Mollit voluptate exercitation elit exercitation dolor labore et incididunt. Ea pariatur fugiat ad quis aliqua dolore eiusmod fugiat incididunt incididunt. Sit officia sint non sint qui ipsum sint consectetur dolor officia amet.',
        comments: [
          {
            username: 'Rosemarie',
            city: 'Rowe',
            email: 'rosemariegordon@decratex.com',
            content: 'Quis fugiat aute exercitation amet incididunt consectetur. Mollit eu dolore et occaecat non sit dolor ipsum duis labore. Velit ex anim proident excepteur aliqua reprehenderit.'
          },
          {
            username: 'Robbie',
            city: 'Chapin',
            email: 'robbiegordon@decratex.com',
            content: 'Et proident proident ex ullamco commodo incididunt sit et ut aliqua cupidatat. Anim anim amet pariatur minim magna Lorem sint sunt ex laborum anim officia quis. Aliqua ea nulla irure commodo cupidatat proident ea Lorem proident.'
          },
          {
            username: 'Daugherty',
            city: 'Norwood',
            email: 'daughertygordon@decratex.com',
            content: 'Dolor elit esse qui Lorem deserunt. Magna sunt pariatur et elit duis excepteur enim eiusmod culpa nisi consectetur. Id nisi veniam consequat consectetur laborum laborum proident magna amet fugiat.'
          },
          {
            username: 'Rollins',
            city: 'Yonah',
            email: 'rollinsgordon@decratex.com',
            content: 'Sunt duis nulla sit culpa labore non. Quis duis culpa in incididunt laborum amet anim sint enim consequat. Eu excepteur commodo dolor fugiat adipisicing in quis ex voluptate eiusmod occaecat veniam aliquip exercitation.'
          }
        ]
      }
    ]
  })
  .controller('CommentsController', $scope => {
    // let vm = this;
    $scope.comments = []
  });
