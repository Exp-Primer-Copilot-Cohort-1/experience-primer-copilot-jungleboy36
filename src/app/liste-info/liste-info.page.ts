import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-info',
  templateUrl: './liste-info.page.html',
  styleUrls: ['./liste-info.page.scss'],
})
export class ListeInfoPage implements OnInit {

  constructor(private router : Router) { 
    $('.main-content').toggleClass('hide-sidemenu-area');

  }

  ngOnInit() {
    $('.main-content').toggleClass('hide-sidemenu-area');
    $('.burger-menu').on('click', function() {
			$(this).toggleClass('active');
			$('.main-content').toggleClass('hide-sidemenu-area');
			$('.sidemenu-area').toggleClass('toggle-sidemenu-area');
			$('.top-navbar').toggleClass('toggle-navbar-area');
      $('.sidemenu-body').css('pointer-events','none');

		});
		$('.responsive-burger-menu').on('click', function() {
			$('.responsive-burger-menu').toggleClass('active');
			$('.sidemenu-area').toggleClass('active-sidemenu-area');
      $('.sidemenu-body').css('pointer-events','all');
      
        });

        $(document).ready(function() {
          // jQuery code to add style attribute to the div
          $('.responsive-burger-menu').css('margin-left', '30px');
          $('.navbar-nav.right-nav.align-items-center').css('margin-left', 'auto');
        });


        function handleClassChange(mutation:any) {
          if (mutation.attributeName === 'class') {
            const newClass = mutation.target.className;
            console.log('Class changed to:', newClass);
            if(newClass == 'responsive-burger-menu d-block d-lg-none active'){
              $('.sidemenu-body').css('pointer-events','all'); 
            }
            if(newClass == 'responsive-burger-menu d-block d-lg-none'){
              $('.sidemenu-body').css('pointer-events','none'); 
            }
            }
        }
      
        const targetNode = document.getElementById('burger-menu');
      
        const observer = new MutationObserver(function(mutationsList) {
          mutationsList.forEach(handleClassChange);
        });
              observer.observe(targetNode!, { attributes: true });
  }
  logout(){
    this.router.navigate(['/login']);
  }
}
