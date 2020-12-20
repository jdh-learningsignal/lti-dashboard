const Sequelize = require('sequelize');

module.exports = class Course extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            account_id: {
                type: Sequelize.INTEGER(),
                allowNull: false
            },
            group_weighting_scheme: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            workflow_state: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            uuid: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            start_at: {
                type: Sequelize.TIME,
                allowNull: true
            },
            conclude_at: {
                type: Sequelize.TIME,
                allowNull: true
            },
            grading_standard_id: {
                type: Sequelize.INTEGER(),
                allowNull: true
            },
            is_public: {
                type: Sequelize.BOOLEAN,
                allowNull: true
            },
            allow_student_wiki_edits: {
                type: Sequelize.BOOLEAN,
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
            show_public_context_messages: {
                type: Sequelize.BOOLEAN,
                allowNull: true
            },
            syllabus_body: {
                type: Sequelize.TEXT(),
                allowNull: true
            },
            allow_student_forum_attachments: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
                defaultValue: false
            },
            default_wiki_editing_roles: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            wiki_id: {
                type: Sequelize.INTEGER(),
                allowNull: true
            },
            allow_student_organized_groups: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
            course_code: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            default_view: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            abstract_course_id: {
                type: Sequelize.INTEGER(),
                allowNull: true
            },
            root_account_id: {
                type: Sequelize.INTEGER(),
                allowNull: false
            },
            enrollment_term_id: {
                type: Sequelize.INTEGER(),
                allowNull: false
            },
            sis_source_id: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            sis_batch_id: {
                type: Sequelize.INTEGER(),
                allowNull: true
            },
            open_enrollment: {
                type: Sequelize.BOOLEAN,
                allowNull: true
            },
            storage_quota: {
                type: Sequelize.INTEGER(),
                allowNull: true
            },
            tab_configuration: {
                type: Sequelize.TEXT(),
                allowNull: true
            },
            allow_wiki_comments: {
                type: Sequelize.BOOLEAN,
                allowNull: true
            },
            turnitin_comments: {
                type: Sequelize.TEXT(),
                allowNull: true
            },
            self_enrollment: {
                type: Sequelize.BOOLEAN,
                allowNull: true
            },
            license: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            indexed: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            restrict_enrollments_to_course_dates: {
                type: Sequelize.BOOLEAN,
                allowNull: true
            },
            template_course_id: {
                type: Sequelize.INTEGER(),
                allowNull: true
            },
            locale: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            settings: {
                type: Sequelize.TEXT(),
                allowNull: true
            },
            replacement_course_id: {
                type: Sequelize.INTEGER(),
                allowNull: true
            },
            stuck_sis_fields: {
                type: Sequelize.TEXT(),
                allowNull: true
            },
            public_description: {
                type: Sequelize.TEXT(),
                allowNull: true
            },
            self_enrollment_code: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            self_enrollment_limit: {
                type: Sequelize.INTEGER(),
                allowNull: true
            },
            integration_id: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            time_zone: {
                type: Sequelize.STRING(255),
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
            show_announcements_on_home_page: {
                type: Sequelize.BOOLEAN,
                allowNull: true
            },
            home_page_announcement_limit: {
                type: Sequelize.INTEGER(),
                allowNull: true
            },
            latest_outcome_import_id: {
                type: Sequelize.INTEGER(),
                allowNull: true
            },
            grade_passback_setting: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
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
        db.Course.belongsTo(db.Account, { foreignKey: 'account_id', targetKey: 'id' })
    }
}