const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            sortable_name: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            workflow_state: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            time_zone: {
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
            avatar_image_url: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            avatar_image_source: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            avatar_image_updated_at: {
                type: Sequelize.TIME,
                allowNull: true
            },
            phone: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            school_name: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            school_position: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            short_name: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            deleted_at: {
                type: Sequelize.TIME,
                allowNull: true
            },
            show_user_services: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
                defaultValue: true
            },
            gender: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            page_views_count: {
                type: Sequelize.INTEGER(),
                allowNull: true,
                defaultValue: 0
            },
            reminder_time_for_due_dates: {
                type: Sequelize.INTEGER(),
                allowNull: true,
                defaultValue: 172800
            },
            reminder_time_for_grading: {
                type: Sequelize.INTEGER(),
                allowNull: true,
                defaultValue: 0
            },
            storage_quota: {
                type: Sequelize.INTEGER(),
                allowNull: true
            },
            visible_inbox_types: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            last_user_note: {
                type: Sequelize.TIME,
                allowNull: true
            },
            subscribe_to_emails: {
                type: Sequelize.BOOLEAN,
                allowNull: true
            },
            features_used: {
                type: Sequelize.TEXT(),
                allowNull: true
            },
            preferences: {
                type: Sequelize.TEXT(),
                allowNull: true
            },
            avatar_state: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            locale: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            browser_locale: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            unread_conversations_count: {
                type: Sequelize.INTEGER(),
                allowNull: true,
                defaultValue: 0
            },
            stuck_sis_fields: {
                type: Sequelize.TEXT(),
                allowNull: true
            },
            public: {
                type: Sequelize.BOOLEAN,
                allowNull: true
            },
            birthdate: {
                type: Sequelize.TIME,
                allowNull: true
            },
            otp_secret_key_enc: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            otp_secret_key_salt: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            otp_communication_channel_id: {
                type: Sequelize.INTEGER(),
                allowNull: true
            },
            initial_enrollment_type: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            crocodoc_id: {
                type: Sequelize.INTEGER(),
                allowNull: true
            },
            last_logged_out: {
                type: Sequelize.TIME,
                allowNull: true
            },
            lti_context_id: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            turnitin_id: {
                type: Sequelize.INTEGER(),
                allowNull: true
            },
            lti_id: {
                type: Sequelize.TEXT(),
                allowNull: true
            },
            pronouns: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            root_account_ids: {
                type: Sequelize.INTEGER(),
                allowNull: true
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: true,
            modelName: 'Course',
            tableName: 'courses',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    }
    
    static associate(db) {
        db.User.hasMany(db.Enrollment, { foreignKey: 'user_id', sourceKey: 'id' })
    }
}