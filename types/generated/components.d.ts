import type { Schema, Struct } from '@strapi/strapi';

export interface AboutSectionAbout extends Struct.ComponentSchema {
  collectionName: 'components_about_section_abouts';
  info: {
    displayName: 'about';
  };
  attributes: {
    description: Schema.Attribute.Text;
    list_abouts: Schema.Attribute.Relation<
      'oneToMany',
      'api::list-about.list-about'
    >;
    title: Schema.Attribute.String;
  };
}

export interface ContactSectionContact extends Struct.ComponentSchema {
  collectionName: 'components_contact_section_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    description: Schema.Attribute.Text;
    list_contacts: Schema.Attribute.Relation<
      'oneToMany',
      'api::list-contact.list-contact'
    >;
    title: Schema.Attribute.String;
  };
}

export interface ConverageSectionConverage extends Struct.ComponentSchema {
  collectionName: 'components_converage_section_converages';
  info: {
    displayName: 'converage';
  };
  attributes: {
    description: Schema.Attribute.Text;
    list_converages: Schema.Attribute.Relation<
      'oneToMany',
      'api::list-converage.list-converage'
    >;
    thumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface FooterSectionFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_section_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HeroSectionHero extends Struct.ComponentSchema {
  collectionName: 'components_hero_section_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    button: Schema.Attribute.String;
    button2: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    thumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ProductSectionProduct extends Struct.ComponentSchema {
  collectionName: 'components_product_section_products';
  info: {
    displayName: 'product';
  };
  attributes: {
    description: Schema.Attribute.Text;
    list_products: Schema.Attribute.Relation<
      'oneToMany',
      'api::list-product.list-product'
    >;
    title: Schema.Attribute.String;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SpecificationProductSpecifications
  extends Struct.ComponentSchema {
  collectionName: 'components_specification_product_specifications';
  info: {
    displayName: 'specifications';
  };
  attributes: {
    description: Schema.Attribute.Text;
  };
}

export interface TestimoniSectionTestimoni extends Struct.ComponentSchema {
  collectionName: 'components_testimoni_section_testimonis';
  info: {
    displayName: 'testimoni';
  };
  attributes: {
    description: Schema.Attribute.Text;
    list_testimonis: Schema.Attribute.Relation<
      'oneToMany',
      'api::list-testimoni.list-testimoni'
    >;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-section.about': AboutSectionAbout;
      'contact-section.contact': ContactSectionContact;
      'converage-section.converage': ConverageSectionConverage;
      'footer-section.footer': FooterSectionFooter;
      'hero-section.hero': HeroSectionHero;
      'product-section.product': ProductSectionProduct;
      'seo.seo': SeoSeo;
      'specification-product.specifications': SpecificationProductSpecifications;
      'testimoni-section.testimoni': TestimoniSectionTestimoni;
    }
  }
}
