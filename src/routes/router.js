const express = require('express');
const pageRouter = express.Router();
const app = express();
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const Mixpanel = require('mixpanel');




const mixpanel = Mixpanel.init('0287b0f799329cfc9fcec61d882b2bed');

const user_name = '';
const user_email = '';

app.use(morgan('tiny'));

pageRouter.route('/index').get((req, res) => {
	//debug(user_name);
	//mixpanel.track('Clicked Home Nav', {
	//	distinct_id: user_name,
	//	status: 'Succesful Navigation Recorded'
	//});
	res.render('index');
});

pageRouter.route('/users').get((req, res) => {
	mixpanel.track('Clicked Users Nav', {
		distinct_id: '',
		status: 'Succesful Navigation Recorded'
	});
	res.render('users');
});

pageRouter.route('/workers').get((req, res) => {
	mixpanel.track('Clicked Workers Nav', {
		distinct_id: '',
		status: 'Succesful Navigation Recorded'
	});
	res.render('workers');
});

pageRouter.route('/taskView').get((req, res) => {
	mixpanel.track('Clicked Task View Nav', {
		distinct_id: '',
		status: 'Succesful Navigation Recorded'
	});
	res.render('taskView', { tasks });
});

pageRouter.route('/:id').get((req, res) => {
	const { id } = req.params;
	const task = tasks[id];
	mixpanel.track('Clicked Task Nav', {
		distinct_id: '',
		status: 'Succesful Navigation Recorded',
		taskID: id
	});
	res.render('task', { task });
});

//pageRouter.route('/sLogin').post((req, res) => {
//	const user_name = req.body.name;
//	const user_email = req.body.email;
//
//	debug(user_name);
//	mixpanel.track('Logged User', {
//		distinct_id: user_name,
//		User_Email: user_email,
//		status: 'Succesful Login'
//	});
//
//	res.render('index');
//	return user_name, user_email;
//});


const tasks = [
	{
		title: 'task1',
		taskCreated: 'Jul 10, 2019 | 13:22:26',
		taskCreatedBy: 'John Watson',
		taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	}, {
		title: 'task2',
		taskCreated: 'Jul 10, 2019 | 11:43:20',
		taskCreatedBy: 'Insp. Lestrade',
		taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Sit amet mattis vulputate enim. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum.Congue quisque egestas diam in arcu cursus.Velit sed ullamcorper morbi tincidunt ornare massa eget.Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Ultrices in iaculis nunc sed augue lacus.Orci a scelerisque purus semper eget duis at tellus at.Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac.Consequat ac felis donec et odio pellentesque diam volutpat.Vulputate dignissim suspendisse in est ante in nibh mauris cursus.Donec ultrices tincidunt arcu non sodales neque.Aliquam faucibus purus in massa tempor.'
	}, {
		title: 'task3',
		taskCreated: 'Jul 09, 2019 | 16:34:03',
		taskCreatedBy: 'John Watson',
		taskDescription: 'At tempor commodo ullamcorper a lacus vestibulum sed. At erat pellentesque adipiscing commodo elit. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Morbi tristique senectus et netus et malesuada fames ac turpis. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a.Maecenas pharetra convallis posuere morbi leo urna.Egestas congue quisque egestas diam in arcu cursus euismod.Molestie a iaculis at erat pellentesque adipiscing commodo.Cras sed felis eget velit aliquet sagittis id consectetur.Nec tincidunt praesent semper feugiat nibh.'
	}, {
		title: 'task4',
		taskCreated: 'Jul 09, 2019 | 12:56:51',
		taskCreatedBy: 'Mycroft Holmes',
		taskDescription: 'Faucibus nisl tincidunt eget nullam non nisi est. Viverra nam libero justo laoreet. Volutpat consequat mauris nunc congue nisi. Amet nulla facilisi morbi tempus. Id diam maecenas ultricies mi eget. Non quam lacus suspendisse faucibus interdum posuere.Adipiscing enim eu turpis egestas pretium aenean pharetra.Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae.Amet consectetur adipiscing elit ut.Justo laoreet sit amet cursus sit.'
	}, {
		title: 'task5',
		taskCreated: 'Jul 09, 2019 | 09:27:06',
		taskCreatedBy: 'James Moriarty',
		taskDescription: 'Nulla facilisi cras fermentum odio eu feugiat. Et magnis dis parturient montes nascetur ridiculus mus mauris. Donec massa sapien faucibus et. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Risus sed vulputate odio ut enim.Lectus sit amet est placerat in egestas erat imperdiet sed.Amet tellus cras adipiscing enim eu turpis egestas pretium.Odio tempor orci dapibus ultrices in iaculis nunc.Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan.Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat.Diam maecenas sed enim ut sem viverra aliquet eget sit.Enim nunc faucibus a pellentesque sit amet.Lectus sit amet est placerat in egestas erat imperdiet.'
	}, {
		title: 'task6',
		taskCreated: 'Jul 08, 2019 | 17:59:59',
		taskCreatedBy: 'S. Holmes',
		taskDescription: 'Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis. Ipsum nunc aliquet bibendum enim facilisis. Vestibulum sed arcu non odio. Aliquam ut porttitor leo a diam. Nunc sed id semper risus. Aliquam eleifend mi in nulla. Rhoncus dolor purus non enim praesent elementum facilisis.Viverra aliquet eget sit amet tellus cras adipiscing enim.Sapien eget mi proin sed libero enim sed faucibus turpis.Bibendum ut tristique et egestas quis ipsum.Facilisis leo vel fringilla est ullamcorper.Tortor condimentum lacinia quis vel eros donec.Massa id neque aliquam vestibulum morbi blandit.Ut tellus elementum sagittis vitae et leo duis ut.Tortor consequat id porta nibh venenatis cras sed.Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet.Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio.'
	}, {
		title: 'task7',
		taskCreated: 'Jul 08, 2019 | 17:59:59',
		taskCreatedBy: 'S. Holmes',
		taskDescription: 'Neque volutpat ac tincidunt vitae semper quis lectus. Erat imperdiet sed euismod nisi. Facilisis gravida neque convallis a cras semper. Ac felis donec et odio pellentesque diam volutpat commodo sed. Dignissim convallis aenean et tortor at risus.Sit amet porttitor eget dolor morbi non arcu risus.Magna eget est lorem ipsum dolor sit.Ipsum dolor sit amet consectetur adipiscing elit duis tristique.Porta nibh venenatis cras sed felis eget velit aliquet.Faucibus in ornare quam viverra orci.'
	}, {
		title: 'task8',
		taskCreated: 'Jul 08, 2019 | 17:59:59',
		taskCreatedBy: 'S. Holmes',
		taskDescription: 'Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Nascetur ridiculus mus mauris vitae ultricies leo integer. Purus ut faucibus pulvinar elementum integer enim. Condimentum mattis pellentesque id nibh. Sem integer vitae justo eget magna fermentum iaculis eu non.Malesuada bibendum arcu vitae elementum curabitur.Vel quam elementum pulvinar etiam non quam.Elit at imperdiet dui accumsan sit.Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est.Integer malesuada nunc vel risus commodo.Morbi leo urna molestie at elementum eu facilisis sed odio.Quam elementum pulvinar etiam non quam.Aliquet lectus proin nibh nisl condimentum id venenatis.'
	}, {
		title: 'task9',
		taskCreated: 'Jul 08, 2019 | 17:59:59',
		taskCreatedBy: 'S. Holmes',
		taskDescription: 'Nisi est sit amet facilisis. Velit dignissim sodales ut eu sem. Et tortor consequat id porta. Pretium fusce id velit ut tortor pretium viverra suspendisse. Egestas diam in arcu cursus euismod quis viverra. Pellentesque nec nam aliquam sem et tortor.Enim lobortis scelerisque fermentum dui.Lacus sed turpis tincidunt id aliquet risus.Venenatis urna cursus eget nunc scelerisque viverra.Massa tempor nec feugiat nisl pretium fusce id velit.Enim neque volutpat ac tincidunt vitae semper.Cras semper auctor neque vitae tempus quam pellentesque.Sagittis eu volutpat odio facilisis mauris sit amet.Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut.Egestas tellus rutrum tellus pellentesque.Lorem ipsum dolor sit amet.Morbi tristique senectus et netus et malesuada fames ac turpis.Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	}
]

module.exports = pageRouter;