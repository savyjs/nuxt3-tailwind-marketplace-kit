export declare namespace Zoho {

    interface Cart {
        addToCart()

        removeFromCart()

        SyncCart()
    }

    interface Product {
        product_id?: string // Unique identifier of the product.
        name?: string // Name of the product.
        url?: string // URL of the product.
        short_description?: string // Concise description of the product.
        description?: string // Detailed description of the product.
        category_name?: string // Name of the category to which the product bestrings.
        category_id?: string // The unique category ID of the product.
        is_out_of_stock?: boolean // Denotes whether the product is out of stock.
        tags?: [] // List of tags for the product.
        brand?: Brand // Brand name for the product.
        is_returnable?: boolean // Denotes whether the product can be returned.
        on_sale?: boolean // Denotes whether product is on sale.
        seo?: {
            title?: string // Title for SEO
            keyword?: string // SEO keywords for the product.
            description?: string // SEO description for the product.
        }
        specification_group?: [] // List of specifications configured.
        review_id?: string // Denotes the review ID of the product.
        is_product_custom_fields_enabled?: boolean // Denotes whether custom fields are enabled.
        has_variant_price?: boolean // Denotes whether product has a variant pricing.
        has_variants?: boolean // Denotes whether the product has variants.
        handle?: string // Denotes the URL of the product
        is_product_review_enabled?: boolean // Denotes whether the product has reviews enabled.
        is_social_share_enabled?: boolean // Denotes whether the product has social share enabled.
        social_share_options?: [] // List of social share options for the product.
        attributes?: Attribute[]
        variants?: Variant[]

        custom_fields?: {
            // Set of custom field values for the variant
            customfield_id?: string // Unique custom field ID.
            display_value?: string // The value to be displayed if edit_on_store is false.
            label?: string // Label of the custom field.
            is_mandatory?: boolean // Is the field mandatory.
            edit_on_store?: boolean // Denotes whether the field is editable on the store.
            field_type?: boolean // Type of the custom field.
            value?: boolean // The default value of the custom field.
            values?: string[] //	string?: The default selected values for a multi-select custom field.
            //	string?: Options for a multi-select and drop-down custom field.
            options?: string[]
        }[]
        images?: { // List of all the images mapped for the product.

            alternate_text?: string // Alternate text for the SEO purpose of the image.
            is_placeholder_image?: boolean // Denotes whether the image is used as a placeholder.
            id?: string // Unique ID of the image.
            title?: string // Name of the image.
            url?: string // URL of the image.
            is_featured?: boolean // This denotes whether the image is featured
            order?: number // This denotes the chronological order of the image.
        }[]
        options?: { // List of all attributes of a variant.
            name?: string // Name of the attribute.
            id?: string // Unique ID of the attribute.
            value?: string // Value of the attribute.
        }[]
        documents?: { // List of all the images mapped for the product.
            document_id?: string // Unique ID generated by the server for the image.
            name?: string // Name of the image
            attachment_order?: number // This denotes the chronological order of the image.
            is_featured?: boolean // This denotes whether the image is featured.
            alter_text?: string // Alter text for the SEO purpose of the image.
        }[]
    }

    interface Brand {
        name?: string

    }

    interface Attribute {
        name?: string // Name of the attribute.
        options?: [] // List of options for the attribute (ID, value).
        id?: string // Unique ID of the attribute.
        type?: string // Type of the attribute.
    }

    interface Variant {
        id: string | number
        // List of all the variants available for a product.
        variant_id?: string // Unique ID generated by the server for the variant.
        selling_price?: number // Selling price of the variant.
        sku?: string // SKU for the variant.
        ean?: string // EAN for the variant.
        upc?: string // UPC for the variant.
        isbn?: string // ISBN for the variant
        label_price?: number // Retail price of the variant.
        is_returnable?: boolean // Denotes whether the variant can be returned.
        custom_fields?: [] // List of custom field values for the variant.
        images?: [] // List of images for the variant.
        options?: [] // List of attribute options for the variant.

    }
}