import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.main-content').toggleClass('hide-sidemenu-area');
    $('.burger-menu').on('click', function() {
			$(this).toggleClass('active');
			$('.main-content').toggleClass('hide-sidemenu-area');
			$('.sidemenu-area').toggleClass('toggle-sidemenu-area');
			$('.top-navbar').toggleClass('toggle-navbar-area');
		});
		$('.responsive-burger-menu').on('click', function() {
			$('.responsive-burger-menu').toggleClass('active');
			$('.sidemenu-area').toggleClass('active-sidemenu-area');
        });
        $(document).ready(function() {
          // jQuery code to add style attribute to the div
          $('.responsive-burger-menu').css('margin-left', '30px');
          $('.navbar-nav.right-nav.align-items-center').css('margin-left', 'auto');
        });
  }

}
