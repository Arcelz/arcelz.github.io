app.config( function($httpProvider, $stateProvider, $urlRouterProvider) {

	   //$httpProvider.interceptors.push('tokenInterceptor');

     $stateProvider
      .state('common', {
        templateUrl: 'app/layout/menu.html',
        abstract: true,
      })
      .state('home', {
        url: '/',
        parent: 'common',
        templateUrl: 'app/views/home.html',
        controller:'Home',
        controllerAs: 'vm'

      })
       .state('funcionarioL', {
        url: '/funcionarios',
        parent: 'common',
        templateUrl: 'app/views/funcionario/listar-funcionarios.html',
        controller:'FuncionarioListar',
        controllerAs: 'vm'

      })
       .state('funcionarioN', {
        url: '/funcionarios/novo',
        parent: 'common',
        templateUrl: 'app/views/funcionario/cadastro-funcionarios.html',
        controller:'FuncionarioSalvar',
        controllerAs: 'vm'

      })

      .state('veiculos', {
       url: '/veiculos',
       parent: 'common',
       templateUrl: 'app/views/veiculo/cadastro-veiculos.html',
       controller:'Funcionario',
       controllerAs: 'vm'

     })
      .state('cliente', {
       url: '/clientes',
       parent: 'common',
       templateUrl: 'app/views/cliente/cadastro-clientes.html',
       controller:'Funcionario',
       controllerAs: 'vm'

     }).state('marca', {
       url: '/marcas',
       parent: 'common',
       templateUrl: 'app/views/marca/cadastro-marcas.html',
       controller:'Funcionario',
       controllerAs: 'vm'
     })

     .state('modelo', {
       url: '/modelos',
       parent: 'common',
       templateUrl: 'app/views/modelo/cadastro-modelos.html',
       controller:'Funcionario',
       controllerAs: 'vm'
     })

		 .state('categoria', {
       url: '/categorias',
       parent: 'common',
       templateUrl: 'app/views/categoria/cadastro-categorias.html',
       controller:'Funcionario',
       controllerAs: 'vm'
     })

      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller:'Login',
        controllerAs: 'vm'
      });

      $urlRouterProvider.otherwise('/');
    /*

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('home', {
            url: '/',
            controller:'Home',
            controllerAs: 'vm'
        })
        .state('login', {
            url: '/login',
            controller:'Login'
        })
         .state('categoria', {
            url: '/categorias',
            templateUrl: 'app/categoria/cadastro-categorias.html',
            controller:'Categoria'
        })
        .state('home.dashboard', {
            url: '/dashboard',
            templateUrl: 'app/dashboard/dashboard.html',
        })*/

});
