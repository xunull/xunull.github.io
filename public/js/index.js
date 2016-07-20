// 项目的url 路径 repoUrlBase + 项目名
var repoUrlBase='https://github.com/xunull/';

// key 是 repo的name
var repos = new Map();
// 存储的都是fork的项目
var forkRepo = [];
/**
 * 项目分类的方法 
 */
function reposSort(data) {
	for(var repo of data) {
		repos.set(repo.name, repo);
		if(repo.fork) {
			forkRepo.push(repo);
		}
		//                console.log(repo.name);
	}

	console.log(forkRepo);
}