const Sequelize = require('sequelize');

module.exports = class Account extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            created_at: {
                type: Sequelize.TIME,
                allowNull: true
            },
            updated_at: {
                type: Sequelize.TIME,
                allowNull: true
            },
            workflow_state: {
                type: Sequelize.STRING(255),
                allowNull: false,
                defaultValue: 'active'
            },
            deleted_at: {
                type: Sequelize.TIME,
                allowNull: true
            },
            parent_account_id: {
                type: Sequelize.INTEGER(),
                allowNull: true
            },
            sis_source_id: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            sis_batch_id: {
                type: Sequelize.INTEGER(),
                allowNull: true
            },
            current_sis_batch_id: {
                type: Sequelize.INTEGER(),
                allowNull: true
            },
            root_account_id: {
                type: Sequelize.INTEGER(),
                allowNull: true
            },
            last_successful_sis_batch_id: {
                type: Sequelize.INTEGER(),
                allowNull: true
            },
            membership_types: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            default_time_zone: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            external_status: {
                type: Sequelize.STRING(255),
                allowNull: true,
                defaultValue: 'active'
            },
            storage_quota: {
                type: Sequelize.INTEGER(),
                allowNull: true
            },
            default_storage_quota: {
                type: Sequelize.INTEGER(),
                allowNull: true
            },
            enable_user_notes: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
                defaultValue: false
            },
            allowed_services: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            turnitin_pledge: {
                type: Sequelize.TEXT(),
                allowNull: true
            },
            turnitin_comments: {
                type: Sequelize.TEXT(),
                allowNull: true
            },
            turnitin_account_id: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            turnitin_salt: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            turnitin_crypted_secret: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            show_section_name_as_course_name: {
                type: Sequelize.BOOLEAN,
                allowNull: true
            },
            allow_sis_import: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
                defaultValue: false
            },
            equella_endpoint: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            settings: {
                type: Sequelize.TEXT(),
                allowNull: true
            },
            uuid: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            default_locale: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            stuck_sis_fields: {
                type: Sequelize.TEXT(),
                allowNull: true
            },
            default_user_storage_quota: {
                type: Sequelize.INTEGER(),
                allowNull: true
            },
            lti_guid: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            
            default_group_storage_quota: {
                type: Sequelize.INTEGER(),
                allowNull: true
            },
            turnitin_host: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            integration_id: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            lti_context_id: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            brand_config_md5: {
                type: Sequelize.STRING(32),
                allowNull: true
            },
            turnitin_originality: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            latest_outcome_import_id: {
                type: Sequelize.INTEGER(),
                allowNull: true
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: true,
            modelName: 'Account',
            tableName: 'accounts',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    }
    
    static associate(db) {
        db.Account.hasMany(db.Course, { foreignKey: 'account_id', sourceKey: 'id' })
    }
}