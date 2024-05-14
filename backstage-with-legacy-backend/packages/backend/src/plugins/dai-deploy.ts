import { createRouter } from '@digital-ai/plugin-dai-deploy-backend';
import { Router } from 'express';
import type { PluginEnvironment } from '../types';

export default function createPlugin(
    env: PluginEnvironment,
): Promise<Router> {
    return createRouter({
        logger: env.logger,
        config: env.config,
        permissions: env.permissions
    });
}