import { subjectRouter } from "@/server/api/routers/subject";
import { fileRouter } from "@/server/api/routers/file";
import { learningRouter } from "@/server/api/routers/learning";
import { adminRouter } from "@/server/api/routers/admin";
import { teacherRouter } from "@/server/api/routers/teacher";
import { plannerRouter } from "@/server/api/routers/planner";
import { attendanceRouter } from "@/server/api/routers/attendance";
import { createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    subject: subjectRouter,
    file: fileRouter,
    learning: learningRouter,
    admin: adminRouter,
    teacher: teacherRouter,
    planner: plannerRouter,
    attendance: attendanceRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
