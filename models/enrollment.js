const Sequelize = require('sequelize');

module.exports = class Enrollment extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            user_id: {
                type: Sequelize.INTEGER(),
                allowNull: false
            },
            course_id: {
                type: Sequelize.INTEGER(),
                allowNull: false
            },
            type: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            uuid: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            workflow_state: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            created_at: {
                type: Sequelize.TIME,
                allowNull: true
            },
            updated_at: {
                type: Sequelize.TIME,
                allowNull: true
            },
            associated_user_id: {
                type: Sequelize.INTEGER(),
                allowNull: true
            },
            sis_batch_id: {
                type: Sequelize.INTEGER(),
                allowNull: true
            },
            start_at: {
                type: Sequelize.TIME,
                allowNull: true
            },
            end_at: {
                type: Sequelize.TIME,
                allowNull: true
            },
            course_section_id: {
                type: Sequelize.INTEGER(),
                allowNull: false
            },
            root_account_id: {
                type: Sequelize.INTEGER(),
                allowNull: false
            },
            completed_at: {
                type: Sequelize.TIME,
                allowNull: true
            },
            self_enrolled: {
                type: Sequelize.BOOLEAN,
                allowNull: true
            },
            grade_publishing_status: {
                type: Sequelize.STRING(255),
                allowNull: true,
                defaultValue: 'unpublished'
            },
            last_publish_attempt_at: {
                type: Sequelize.TIME,
                allowNull: true
            },
            stuck_sis_fields: {
                type: Sequelize.TEXT(),
                allowNull: true
            },
            grade_publishing_message: {
                type: Sequelize.TEXT(),
                allowNull: true
            },
            limit_privileges_to_course_section: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            last_activity_at: {
                type: Sequelize.TIME,
                allowNull: true
            },
            total_activity_time: {
                type: Sequelize.INTEGER(),
                allowNull: true,
                defaultValue: 'active'
            },
            role_id: {
                type: Sequelize.INTEGER(),
                allowNull: false
            },
            graded_at: {
                type: Sequelize.TIME,
                allowNull: true
            },
            sis_pseudonym_id: {
                type: Sequelize.INTEGER(),
                allowNull: true
            },
            last_attended_at: {
                type: Sequelize.TIME,
                allowNull: true
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: true,
            modelName: 'Enrollment',
            tableName: 'enrollments',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    }
    
    static associate(db) {
        db.Enrollment.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'id' })
        db.Enrollment.belongsTo(db.Account, { foreignKey: 'root_account_id', targetKey: 'id' })
        db.Enrollment.belongsTo(db.Course, { foreignKey: 'course_id', targetKey: 'id' })
    }
}