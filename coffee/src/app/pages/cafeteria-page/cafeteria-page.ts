import { Component } from '@angular/core';
import { HeroSection } from '../../components/organisms/hero-section/hero-section';
import { MenuCarousel, CarouselItem } from '../../components/organisms/menu-carousel/menu-carousel';
import { AboutSection } from '../../components/organisms/about-section/about-section';
import { ContactSection } from '../../components/organisms/contact-section/contact-section';
import { SiteFooter } from '../../components/organisms/site-footer/site-footer';
import { SectionHeading } from '../../components/atoms/section-heading/section-heading';

@Component({
  selector: 'app-cafeteria-page',
  imports: [HeroSection, MenuCarousel, AboutSection, ContactSection, SiteFooter, SectionHeading],
  templateUrl: './cafeteria-page.html',
  styleUrl: './cafeteria-page.css',
})
export class CafeteriaPage {
  drinks: CarouselItem[] = [
    {
      title: 'Matcha Latte',
      description: 'Ceremonial matcha blended with creamy milk. Smooth, earthy, and perfectly balanced.',
      imageSrc: 'assets/matchaLatte.png',
      imageAlt: 'Matcha Latte',
    },
    {
      title: 'Latte',
      description: 'Italian espresso with velvety steamed milk. Classic, smooth, and comforting.',
      imageSrc: 'assets/latte.png',
      imageAlt: 'Latte',
    },
    {
      title: 'Cold Brew',
      description: 'Slow-steeped coffee brewed for hours. Smooth, refreshing, and naturally refined.',
      imageSrc: 'assets/coldBrew.png',
      imageAlt: 'Cold Brew',
    },
    {
      title: 'Iced Mocha',
      description: 'Bold espresso with artisan chocolate and chilled milk. Refreshing, rich, and subtly sweet.',
      imageSrc: 'assets/icedMocka.png',
      imageAlt: 'Iced Mocha',
    },
    {
      title: 'White Mocha',
      description: 'Creamy white chocolate with espresso. Smooth, sweet, and indulgent.',
      imageSrc: 'assets/whiteMocka.png',
      imageAlt: 'White Mocha',
    },
    {
      title: 'Iced Coffee',
      description: 'Chilled coffee served over ice. Refreshing, bold, and perfectly balanced.',
      imageSrc: 'assets/icedCoffe.png',
      imageAlt: 'Iced Coffee',
    },
  ];

  food: CarouselItem[] = [
    {
      title: 'Caramel & Popcorn',
      description: 'Golden caramel with a delicate popcorn crunch. Sweet, buttery, and perfectly indulgent.',
      imageSrc: 'assets/caramelPopcorn.png',
      imageAlt: 'Caramel & Popcorn',
    },
    {
      title: 'Hazelnut',
      description: 'Roasted hazelnuts folded into a soft, buttery base. Nutty, smooth, and warmly comforting.',
      imageSrc: 'assets/chocolateHazelnut.png',
      imageAlt: 'Hazelnut',
    },
    {
      title: 'Citrus',
      description: 'Bright citrus zest blended into a tender cookie. Fresh, vibrant, and lightly sweet.',
      imageSrc: 'assets/citrus.png',
      imageAlt: 'Citrus',
    },
    {
      title: 'Oreo',
      description: 'Crushed chocolate cookies in a rich cocoa dough. Creamy, nostalgic, and deeply satisfying.',
      imageSrc: 'assets/oreo.png',
      imageAlt: 'Oreo',
    },
    {
      title: 'Caramel',
      description: 'Silky caramel swirled into a soft-baked cookie. Sweet, warm, and delicately balanced.',
      imageSrc: 'assets/peanutCaramel.png',
      imageAlt: 'Caramel',
    },
    {
      title: 'Pistachio',
      description: 'Buttery pistachio with subtle roasted notes. Elegant, nutty, and refined.',
      imageSrc: 'assets/pistachioRaspberries.png',
      imageAlt: 'Pistachio',
    },
    {
      title: 'Red Velvet',
      description: 'Velvety cocoa base with a smooth, delicate sweetness. Rich, soft, and beautifully balanced.',
      imageSrc: 'assets/redVelvet.png',
      imageAlt: 'Red Velvet',
    },
    {
      title: "S'mores",
      description: "Chocolate, toasted marshmallow, and a hint of crunch. Warm, nostalgic, and indulgent.",
      imageSrc: 'assets/smores.png',
      imageAlt: "S'mores",
    },
    {
      title: 'Tiramisu',
      description: 'Espresso-infused cookie with creamy mascarpone notes. Soft, refined, and unmistakably Italian.',
      imageSrc: 'assets/tiramisu.png',
      imageAlt: 'Tiramisu',
    },
  ];
}
